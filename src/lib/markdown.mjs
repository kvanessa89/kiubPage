// Plugins de Markdown para el blog.
import { toString } from 'mdast-util-to-string';
import { visit, SKIP } from 'unist-util-visit';

const WORDS_PER_MINUTE = 220;
const FAQ_HEADING = 'preguntas frecuentes';

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Inyecta `minutesRead` en remarkPluginFrontmatter. */
export function remarkReadingTime() {
  return (tree, file) => {
    const words = toString(tree).split(/\s+/).filter(Boolean).length;
    file.data.astro.frontmatter.minutesRead = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  };
}

/**
 * - Quita los comentarios HTML del .md (notas internas, no deben publicarse).
 * - Reemplaza el H2 "Preguntas frecuentes" por el acordeón generado desde `faq`
 *   del frontmatter, en el mismo lugar, y guarda su posición para el TOC.
 */
export function remarkBlogFaq() {
  return (tree, file) => {
    const fm = file.data.astro.frontmatter;

    visit(tree, 'html', (node, index, parent) => {
      if (parent && /^\s*<!--[\s\S]*-->\s*$/.test(node.value)) {
        parent.children.splice(index, 1);
        return [SKIP, index];
      }
    });

    if (!fm.faq?.length) return;
    let h2Before = 0;
    const i = tree.children.findIndex((node) => {
      if (node.type !== 'heading' || node.depth !== 2) return false;
      if (toString(node).trim().toLowerCase() === FAQ_HEADING) return true;
      h2Before++;
      return false;
    });
    const at = i === -1 ? tree.children.length : i;
    if (i === -1) h2Before = tree.children.filter((n) => n.type === 'heading' && n.depth === 2).length;

    const items = fm.faq
      .map((f, n) => `<details${n === 0 ? ' open' : ''}><summary><span class="q-n">${String(n + 1).padStart(2, '0')}</span><span class="q-t">${escape(f.q)}</span><span class="q-i" aria-hidden="true"></span></summary><div class="post-faq-a"><p>${escape(f.a)}</p></div></details>`)
      .join('');
    const html = `<section class="post-faq" aria-labelledby="preguntas-frecuentes"><h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>${items}</section>`;

    tree.children.splice(at, i === -1 ? 0 : 1, { type: 'html', value: html });
    fm.faqIndex = h2Before;
  };
}

/** Checklists `- [ ]` → ul.checklist > li.check > span.box */
export function rehypeChecklist() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      const cls = node.properties?.className ?? [];
      if (node.tagName === 'ul' && cls.includes('contains-task-list')) {
        node.properties.className = ['checklist'];
      }
      if (node.tagName === 'li' && cls.includes('task-list-item')) {
        node.properties.className = ['check'];
        node.children = node.children.map((child) =>
          child.type === 'element' && child.tagName === 'input'
            ? { type: 'element', tagName: 'span', properties: { className: ['box'], ariaHidden: 'true' }, children: [] }
            : child,
        );
      }
    });
  };
}

import { Node, mergeAttributes } from '@tiptap/core'
import { Fragment, h, render } from 'vue'

export default Node.create({
  name: 'statusParagraph',
  group: 'block',
  draggable: true,
  content: 'inline*',
  addAttributes() {
    return {
      id: {
        default: null
      },
      time: {
        default: null
      },
      status: {
        default: null
      }
    }
  },
  parseHTML() {
    return [
      {
        tag: 'status-paragraph',
        getAttrs: (element) => ({
          id: element.getAttribute('data-id'),
          time: element.getAttribute('data-time'),
          status: element.getAttribute('data-status')
        })
      }
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['status-paragraph', mergeAttributes(HTMLAttributes)]
  },
  addNodeView() {
    return (context) => {
      const dom = document.createElement('div')
      dom.classList.add('relative')

      const container = document.createElement('div')
      container.contentEditable = false
      container.classList.add(
        'absolute',
        'bottom--3',
        'right-0',
        'flex',
        'gap-4'
      )

      const content = document.createElement('div')
      dom.append(content, container)

      const {
        node: { attrs }
      } = context

      const idVNode = h(
        'p',
        {
          class: 'm-0'
        },
        `id:${attrs.id}`
      )
      const timeVNode = h(
        'p',
        {
          class: 'm-0'
        },
        `time:${attrs.time}`
      )

      render(h(Fragment, null, [idVNode, timeVNode]), container)

      return {
        dom,
        contentDOM: content
      }
    }
  }
})

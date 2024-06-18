import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'

const HoverEventHandler = Extension.create({
  name: 'eventHandler',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('eventHandler'),
        props: {
          handleClick(view, pos, event) {
            console.log('🚀 ~ handleClick ~ view:', view)
            /* … */
          },
          handleDoubleClick(view, pos, event) {
            /* … */
          },
          handlePaste(view, event, slice) {
            /* … */
          }
          // … and many, many more.
          // Here is the full list: https://prosemirror.net/docs/ref/#view.EditorProps
        }
      })
    ]
  }
})

export default HoverEventHandler

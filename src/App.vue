<script setup>
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/vue-3'

import HoverEventHandler from './hover'
import StatusParagraph from './status-paragraph'

const content = `
<status-paragraph data-id="383842489-34" data-time="2024/8/1">1111fsfdasfdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss1111fsfdasfdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</status-paragraph>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
`

const editor = useEditor({
  content,
  extensions: [
    Document,
    StatusParagraph,
    Paragraph,
    Text,
    Heading.configure({
      levels: [1, 2]
    }),
    HoverEventHandler
  ]
})
</script>

<template>
  <EditorContent :editor="editor" />
</template>

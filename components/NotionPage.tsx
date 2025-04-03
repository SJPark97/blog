'use client'

import { NotionRenderer } from 'react-notion-x'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import { ExtendedRecordMap } from 'notion-types'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import 'react-notion-x/src/styles.css'

export default function NotionPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <main className="p-6 max-w-3xl mx-auto">
        <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        components={{
            Code,
            Collection,
            Equation,
            Modal,
        }}
        />
    </main>
  )
}
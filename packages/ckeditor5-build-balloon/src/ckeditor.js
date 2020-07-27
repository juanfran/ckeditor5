/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

import InsertImage from '../plugins/insert-image';

// editor.getData();
// Simple plugin which loads the data processor.
function Markdown(editor) {
	editor.data.processor = new GFMDataProcessor(editor.editing.view.document);
}

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	InsertImage,
	LinkImage,
	Indent,
	Link,
	List,
	// doesn't work with markdown
	// MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
 	TextTransformation,
	CodeBlock,
	Markdown
];

/*
bold [x]
italic [x]
strike through [x]
link [x]
ordered list [x]
unordered list [x]
header 1,2,3 [x]
blockquote [x]

image link [x](popup feo, icono repetido)
image upload
remove formating
code
rtl (right to left)

change language
tema

makrdown
marked
showdown
https://github.com/ckeditor/ckeditor5/issues/2314


Insert image via URL
https://github.com/ckeditor/ckeditor5/issues/5161
https://ckeditor.com/docs/ckeditor5/latest/framework/guides/creating-simple-plugin.html#step-4-inserting-a-new-image
https://github.com/ckeditor/ckeditor5/issues/702

https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html
https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/ui/theme-customization.html

https://ckeditor.com/docs/ckeditor5/latest/features/code-blocks.html

https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/clipboard.html#paste-as-plain-text-plugin-example

https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
https://github.com/ckeditor/ckeditor5/issues/1151
https://github.com/abedi-ir/ckeditor5-direction/

test language change
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        // The language code is defined in the https://en.wikipedia.org/wiki/ISO_639-1 standard.
        language: 'es'
    } )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );
*/

// Editor configuration.
BalloonEditor.defaultConfig = {
	alignment: {
		options: [ 'left', 'right' ]
	},
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'imageUpload',
			'insertImage',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'codeBlock'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative',
			'|',
			'linkImage'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

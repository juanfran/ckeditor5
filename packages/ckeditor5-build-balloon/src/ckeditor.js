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
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

import InsertImage from '../plugins/insert-image';
import MentionCustomization from '../plugins/mention-customization';
import AttachFile from '../plugins/attach-file';

// editor.getData();

import '../theme/styles.css'

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
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	InsertImage,
	LinkImage,
	Indent,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
 	TextTransformation,
	CodeBlock,
	Mention,
	MentionCustomization,
	RemoveFormat,
	AttachFile,
	TodoList,
];

/*
Reading

Custom builds - https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html
Mentions - https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html
Theme customization - https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/ui/theme-customization.html
Image link - https://ckeditor.com/docs/ckeditor5/latest/framework/guides/creating-simple-plugin.html#step-4-inserting-a-new-image
			 https://github.com/ckeditor/ckeditor5/issues/5161
			 https://github.com/ckeditor/ckeditor5/issues/702
Code blocks - https://ckeditor.com/docs/ckeditor5/latest/features/code-blocks.html

Debug: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/development-tools.html#ckeditor-5-inspector

Language: https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
*/


/*
bold [x][x]
italic [x][x]
strike through [x][x]
task list [x][X]
link [x][x]
ordered list [x][x]
unordered list [x][x]
header 1,2,3 [x][x]
table [x][x]
blockquote [x][x]
image link [x][x]
image upload [x][x]
remove formating [x][x]
code [x][x]
mentions [x][x]
references [x][x]
emoji [x][x]
custom theme [x] - only in custom build
upload file [x]
internationalization [o] - rtl works but we have to integrage language change and plugin translations.
markdown [x]
code hightlight [o] - we can't change ckeditor html
link wiki [o] - the current wysiwyg doesn't have wiki link
real-component []
real data []

markdown
marked
showdown
https://github.com/ckeditor/ckeditor5/issues/2314

// TODO
// https://github.com/taigaio/taiga-front/issues/1859

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
			'todoList',
			'|',
			'imageUpload',
			'insertImage',
			'blockQuote',
			'insertTable',
			'codeBlock',
			'removeFormat',
			'|',
			'undo',
			'redo',
		]
	},
	image: {
		toolbar: [
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

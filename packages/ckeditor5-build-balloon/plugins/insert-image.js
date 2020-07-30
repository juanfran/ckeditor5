import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class InsertImage extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('insertImage', locale => {
            const view = new ButtonView(locale);
			const t = this.editor.t;

            view.set({
				// todo: i18n
                label: t('Insert image'),
                icon: imageIcon,
                tooltip: true
			});

			// todo: i18n
            view.on('execute', () => {
                const imageUrl = prompt(t('Insert image'));

                editor.model.change(writer => {
                    const imageElement = writer.createElement('image', {
                        src: imageUrl
                    });

                    editor.model.insertContent(imageElement, editor.model.document.selection);
                });
            });

            return view;
        });
    }
}

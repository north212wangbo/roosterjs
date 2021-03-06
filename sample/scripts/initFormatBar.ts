import {
    toggleBold,
    toggleItalic,
    toggleUnderline,
    toggleBullet,
    toggleNumbering,
    toggleStrikethrough,
    toggleSuperscript,
    toggleSubscript,
    clearFormat,
    setIndentation,
    setAlignment,
    setFontName,
    setFontSize,
    setTextColor,
    setBackgroundColor,
} from 'roosterjs-editor-api';
import { Alignment, Indentation, DefaultFormat } from 'roosterjs-editor-types';
import { Editor } from 'roosterjs-editor-core';
import getCurrentEditor from './currentEditor';

export default function initFormatBar() {
    // Bold
    document.getElementById('boldButton').addEventListener('click', function() {
        toggleBold(getCurrentEditor());
    });

    // Italic
    document.getElementById('italicButton').addEventListener('click', function() {
        toggleItalic(getCurrentEditor());
    });

    // Underline
    document.getElementById('underlineButton').addEventListener('click', function() {
        toggleUnderline(getCurrentEditor());
    });

    // Bullets
    document.getElementById('bulletButton').addEventListener('click', function() {
        toggleBullet(getCurrentEditor());
    });

    // Numbering
    document.getElementById('numberingButton').addEventListener('click', function() {
        toggleNumbering(getCurrentEditor());
    });

    // StrikeThrough
    document.getElementById('strikeThroughButton').addEventListener('click', function() {
        toggleStrikethrough(getCurrentEditor());
    });

    // SuperScript
    document.getElementById('superScriptButton').addEventListener('click', function() {
        toggleSuperscript(getCurrentEditor());
    });

    // SubScript
    document.getElementById('subScriptButton').addEventListener('click', function() {
        toggleSubscript(getCurrentEditor());
    });

    // ClearFormat
    document.getElementById('clearFormatButton').addEventListener('click', function() {
        clearFormat(getCurrentEditor());
    });

    // Indent
    document.getElementById('indentButton').addEventListener('click', function() {
        setIndentation(getCurrentEditor(), Indentation.Increase);
    });

    // Outdent
    document.getElementById('outdentButton').addEventListener('click', function() {
        setIndentation(getCurrentEditor(), Indentation.Decrease);
    });

    // AlignLeft
    document.getElementById('alignLeftButton').addEventListener('click', function() {
        setAlignment(getCurrentEditor(), Alignment.Left);
    });

    // AlignCenter
    document.getElementById('alignCenterButton').addEventListener('click', function() {
        setAlignment(getCurrentEditor(), Alignment.Center);
    });

    // AlignRight
    document.getElementById('alignRightButton').addEventListener('click', function() {
        setAlignment(getCurrentEditor(), Alignment.Right);
    });

    // undo
    document.getElementById('undoButton').addEventListener('click', function() {
        let editor = getCurrentEditor();
        editor.focus();
        editor.undo();
    });

    // redo
    document.getElementById('redoButton').addEventListener('click', function() {
        let editor = getCurrentEditor();
        editor.focus();
        editor.redo();
    });

    // font name
    document.getElementById('fontNameButton').addEventListener('change', function() {
        let editor = getCurrentEditor();
        let select = document.getElementById('fontNameButton') as HTMLSelectElement;
        let text = select.value;
        if (text) {
            setFontName(editor, text);
        }
        select.value = '';
    });

    // font size
    document.getElementById('fontSizeButton').addEventListener('change', function() {
        let editor = getCurrentEditor();
        let select = document.getElementById('fontSizeButton') as HTMLSelectElement;
        let text = select.value;
        if (text) {
            setFontSize(editor, text + "px");
        }
        select.value = '';
    });

    // text color
    document.getElementById('textColorButton').addEventListener('change', function() {
        let editor = getCurrentEditor();
        let select = document.getElementById('textColorButton') as HTMLSelectElement;
        let text = select.value;
        if (text) {
            setTextColor(editor, text);
        }
        select.value = '';
    });

    // back color
    document.getElementById('backColorButton').addEventListener('change', function() {
        let editor = getCurrentEditor();
        let select = document.getElementById('backColorButton') as HTMLSelectElement;
        let text = select.value;
        if (text) {
            setBackgroundColor(editor, text);
        }
        select.value = '';
    });
}

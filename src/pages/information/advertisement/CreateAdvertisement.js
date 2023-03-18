import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { Col, Container, Row } from "react-bootstrap";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import React, { useState, useEffect } from "react";
import { BsJustifyLeft } from "react-icons/bs";
import { BsJustifyRight } from "react-icons/bs";
import { BiAlignJustify } from "react-icons/bi";
import { BsJustify } from "react-icons/bs";
import { BsTypeBold } from "react-icons/bs";
import { BsTypeItalic } from "react-icons/bs";
import { BsTypeStrikethrough } from "react-icons/bs";
import { BsTypeH1 } from "react-icons/bs";
import { BsTypeH2 } from "react-icons/bs";
import { BsTypeH3 } from "react-icons/bs";

const Tiptap = () => {
  const [data, setData] = useState({ __html: "First &middot; Second" });

    const { __html  } = data;

  const onInputChange = (source) => {
    setData({ __html: source });
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      Heading,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: `
            <h2>Heading</h2>
            <p>first paragraph</p>
            <p>second paragraph</p>
          `,
  });

  return (
    <>
      <Container>
        <Row>
          <Col sm={10} className="p-5">
            <EditButtons editor={editor} />
            <EditorContent className="border border-bottom-0" editor={editor} />
            <button
              className="btn btn-primary"
              onClick={(e) => {
                onInputChange(editor.getHTML());
              }}
            >
              BOTON
            </button>
            <div dangerouslySetInnerHTML={data}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tiptap;

const EditButtons = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <>
      <div className="btn-group me-2" role="group">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            (editor.isActive("heading", { level: 1 }) ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsTypeH1 />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            (editor.isActive("heading", { level: 2 }) ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsTypeH2 />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            (editor.isActive("heading", { level: 3 }) ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsTypeH3 />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            (editor.isActive("paragraph") ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            (editor.isActive("bold") ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsTypeBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            (editor.isActive("italic") ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsTypeItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            (editor.isActive("strike") ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsTypeStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={
            (editor.isActive({ textAlign: "left" }) ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsJustifyLeft />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            (editor.isActive({ textAlign: "center" }) ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BiAlignJustify />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={
            (editor.isActive({ textAlign: "right" }) ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsJustifyRight />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            (editor.isActive({ textAlign: "justify" }) ? "is-active" : "") +
            " " +
            "btn btn-outline-dark"
          }
        >
          <BsJustify />
        </button>
        <button
          onClick={() => editor.chain().focus().unsetTextAlign().run()}
          className="btn btn-outline-dark"
        >
          unsetTextAlign
        </button>
      </div>
    </>
  );
};

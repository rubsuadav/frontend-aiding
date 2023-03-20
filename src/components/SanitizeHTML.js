import dompurify from 'dompurify';

export default function SafeHTML({ html }) {
    
      const sanitize = (dirty) => ({
        __html: dompurify.sanitize(dirty, {FORCE_BODY: true}),
      });

  return <div dangerouslySetInnerHTML={sanitize(html)} />;
}

export function MessageToast({ show }) {
if (!show) return null;


return (
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 20 }}
transition={{ duration: 0.4 }}
style={{
position: 'relative',
bottom: '28px',
right: '28px',
background: '#7c5cff',
padding: '14px 18px',
borderRadius: '10px',
color: '#fff',
fontWeight: '600',
boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
}}
>
Mensagem enviada!
</motion.div>
);
}



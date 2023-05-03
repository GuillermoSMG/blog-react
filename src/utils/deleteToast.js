import { toast } from 'react-hot-toast';

export function deleteToast() {
  toast.success('Artículo eliminado.', {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      width: '300px',
    },
    position: 'top-center',
  });
}

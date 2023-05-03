import { toast } from 'react-hot-toast';

export function postToast() {
  toast.success('Se ha posteado tu artículo.', {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      minWidth: '300px',
    },
    position: 'top-center',
  });
}

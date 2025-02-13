// import { ValidateResult } from 'react-hook-form';
import Axios from '~/utils/axios';

const isUniqueAttribute = async (type: any, value: any, setIdUnique?: (val: boolean) => void) => {
   try {
      const response = await Axios.post('/guests/check-unique', {
         type,
         value,
      });
      setIdUnique?.(true);
      return { isUnique: true, status: response.status };
   } catch (error) {
      if (error.response && error.response.status === 422) {
         // Email is not unique
         setIdUnique?.(false);
         return { isUnique: false, status: error.response.status };
      } else {
         // Network error or other unexpected error
         console.error('Error:', error);
         // Optionally, you can rethrow the error to propagate it further
         // throw error;
         return { isUnique: false, status: null };
      }
   }
};

export default isUniqueAttribute;

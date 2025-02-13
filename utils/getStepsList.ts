export const getStepsList = (role: any, steps_number: number) => {
   if (role && steps_number === 4) {
      return [
         'personal-info-1',
         'personal-info-2',
         // 'vaccination-info',
         'flights-info',
         'accommodation-info',
      ];
   } else if (role && steps_number === 2) {
      return ['personal-info-1', 'personal-info-2'];
   } else return [];
};

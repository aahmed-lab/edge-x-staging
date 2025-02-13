import { Translate } from '~/i18n';

const IndustryTypeSelect = [
   { value: 'private_sector', label: <Translate id="web:private_sector" /> },
   { value: 'government', label: <Translate id="web:government" /> },
   {
      value: 'international_organization',
      label: <Translate id="web:international_organization" />,
   },
   { value: 'ngos', label: <Translate id="web:ngos" /> },
   { value: 'other', label: <Translate id="web:other" /> },
];

export default IndustryTypeSelect;

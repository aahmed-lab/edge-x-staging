export interface GuestType {
   // step
   gender: string | null;
   title_id: string | null;
   first_name: string | null;
   last_name: string | null;
   company: string | null;
   position_id: string | null;
   job_title: string | null;
   country_of_residence: string | null;
   city: string | null;
   email: string | null;
   phone_code: string | null;
   phone_code_id: string | null;
   phone: string | null;
   //extra
   org_size: string | null;
   industry: string | null;
   interests: string | null;
   industry_other: string | null;

   // step
   is_saudi: string | null;
   visa_status?: string | null; // for none saudi
   document_type: string | null;
   passport_type: string | null;
   saudi_embassy_city: string | null;

   document_number: string | null;
   issue_date?: string | null; // for none saudi
   issue_place?: string | null; // for none saudi
   expiration_date: string | null;
   full_name_on_document: string | null;
   birth_date: string | null;
   birth_city?: string | null; // for none saudi
   nationality: string | null;
   religion: string | null;
   personal_image: string | null;
   personal_image_url?: string | null;
   document_copy: string | null;
   document_copy_url?: string | null;
   visa_copy?: string | null; // for none saudi
   visa_copy_url?: string | null;

   // vaccination_certificate?: string | null;
   // vaccination_certificate_url?: string | null;

   // first_vaccination_type?: string | null;
   // first_vaccination_date?: string | null;

   // second_vaccination_type?: string | null;
   // second_vaccination_date?: string | null;

   // third_vaccination_type?: string | null;
   // third_vaccination_date?: string | null;

   // step
   require_flights?: string | null;
   departure_city_to?: string | null;
   destination_to?: string | null;
   expected_date_of_arrival?: string | null;
   specific_requirements_to?: string | null;
   departure_city_from?: string | null;
   destination_from?: string | null;
   expected_date_of_departure?: string | null;
   specific_requirements_from?: string | null;
   comments?: string | null;
   // step
   require_accommodation?: string | null;
   special_requests?: string | null;
   dietary_requirements?: string | null;
   require_transfer?: string | null;

   is_email_verified?: string | null;
   otp_token?: string | null;

   // other
   step: string | null;
}

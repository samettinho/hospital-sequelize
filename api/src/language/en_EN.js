export default {
  "crud": {
    created: '{#table} created.',
    deleted: '{#table} deleted',
    updated: '{#table} updated.',
    succes: 'transaction successful'
  },
  "tables": {
    user: "user",
    hospital: "hospital",
    role: "role",
    authorisation: "authorisation",
    appointment: "appointment"
  },
  "error": {
    already_exists: 'Record not added. A record with the same unique key already exists.',
    cannot_null: '{} cannot be null',
    not_found: '{} not found',
    appointment_not_created: 'The appointment could not be created. the hour is full.',
    doctor_hospital: 'doctor and hospital do not match',
    appointment_notC: 'appointment not created',
    userDelete: 'The user has an appointment. cannot be deleted',
    user_not_found: 'Cannot create an appointment with a non-user',
    login: 'Please login',
    tc_Taken: 'Tc is already taken',
    user_not_created: 'user not created',
    wrong_login: 'wrong login try again'
  },
  "success": {
    login: 'login success'
  }


}
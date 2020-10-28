import * as admin from 'firebase-admin';
// import { onUpdateOrganization, onCreateOrganization } from './triggers/organizations'
import { onCreateUser } from './triggers/auth'

admin.initializeApp()

export {
  // onCreateOrganization,
  // onUpdateOrganization,
  onCreateUser,
}
import * as admin from 'firebase-admin';
import { onUpdateCompany, onCreateCompany } from './triggers/organizations'

admin.initializeApp()

export {
  onCreateCompany,
  onUpdateCompany,
}
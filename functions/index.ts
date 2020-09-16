import * as admin from 'firebase-admin';
import { onUpdateCompany, onCreateCompany } from './src/triggers/organizations'

admin.initializeApp()

export {
  onCreateCompany,
  onUpdateCompany,
}
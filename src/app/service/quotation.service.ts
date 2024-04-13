import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import {IQuote} from "../types/iquote";

@Injectable({ providedIn: 'root' })
export class QuotationService {
  firestore = inject(Firestore);
  quoteCollections = collection(this.firestore, 'quote');

  getQuote(): Observable<IQuote[]> {
    return collectionData(this.quoteCollections, {
      idField: 'quoteId',
    }) as Observable<IQuote[]>;
  }

  updateQuote(
    quoteId: string,
    dataToUpdate: { quotation: number }
  ): Observable<void> {
    const docRef = doc(this.firestore, 'quote', quoteId);
    return from(setDoc(docRef, dataToUpdate, { merge: true }));
  }

  deleteQuote(quoteId: string): Observable<void> {
    const docRef = doc(this.firestore, 'quote', quoteId);
    return from(deleteDoc(docRef));
  }
}

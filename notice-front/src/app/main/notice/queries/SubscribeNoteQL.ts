import { Injectable } from '@angular/core';
import { Mutation, Subscription } from 'apollo-angular';
import gql from 'graphql-tag';
import { NoteInterface } from '../models/note.interface'

@Injectable({
  providedIn: 'root'
})
export class SubscribeNoteQL extends Subscription<{ noteChanged: NoteInterface }> {
  override document = gql`
      subscription noteChanged($id: Int!){
        noteChanged(id: $id){
          id
          title
          text
          createDate
          updateDate
        }
      }
    `;
}

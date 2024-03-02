import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";

export const selectContact = (state) => state.contacts.contacts;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContact, selectFilter],

  (contacts, filter) => {
    if (!filter?.name) {
      return contacts;
    }
    const fuse = new Fuse(contacts, {
      keys: ["name"],
      includeScore: true,
    });

    const filteredContacts = fuse.search(filter.name.toLowerCase() || "");
    return filteredContacts.map((result) => result.item);
  }
);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { teachersApi } from "./services/TeachersApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { subjectsApi } from "./services/SubjectsApi";
import { groupsApi } from "./services/GroupsApi";
import { scheduleApi } from "./services/ScheduleApi";
import itemsReducer from "./Slices/itemsSlice";
import teachersReducer from "./Slices/teachersSlice";
import groupReducer from "./Slices/groupSlice";
import subjectsReducer from "./Slices/subjectsSlice";
import scheduleSettingsReducer from "./Slices/scheduleSettingsSlice";
import pinsReducer from "src/State/Slices/pinsSlice";

const rootReducer = combineReducers({
  [teachersApi.reducerPath]: teachersApi.reducer,
  [subjectsApi.reducerPath]: subjectsApi.reducer,
  [groupsApi.reducerPath]: groupsApi.reducer,
  [scheduleApi.reducerPath]: scheduleApi.reducer,
  scheduleSettings: scheduleSettingsReducer,
  item: itemsReducer,
  teachers: teachersReducer,
  groups: groupReducer,
  subjects: subjectsReducer,
  pins: pinsReducer,
});

const persisConfig = {
  key: "root",
  storage,
  blacklist: ["teachers", "groups", groupsApi.reducer.name],
};
const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  /* [teachersApi.reducerPath]: teachersApi.reducer,
    [subjectsApi.reducerPath]: subjectsApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [scheduleApi.reducerPath]: scheduleApi.reducer,
    item: itemsReducer, */

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      teachersApi.middleware,
      subjectsApi.middleware,
      groupsApi.middleware,
      scheduleApi.middleware,
    ]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

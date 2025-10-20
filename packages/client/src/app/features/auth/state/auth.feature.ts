// example

// import { createFeature, createReducer, on } from '@ngrx/store';
// import { createAction, props } from '@ngrx/store';

// export const loginSuccess = createAction('[Auth] Login Success', props<{ user: { id: string; email: string } }>());

// type State = { user: { id: string; email: string } | null };
// const initialState: State = { user: null };

// const reducer = createReducer(
//     initialState,
//     on(loginSuccess, (s, { user }) => ({ ...s, user }))
// );

// export const authFeature = createFeature({
//     name: 'auth',
//     reducer,
// });

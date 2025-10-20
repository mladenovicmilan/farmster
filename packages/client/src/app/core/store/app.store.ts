import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type AppState = {
  isOnline: boolean;
  isLoading: boolean;
  theme: 'light' | 'dark';
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<AppState>({
    isOnline: true,
    isLoading: false,
    theme: 'light',
  }),
  withMethods((store) => ({
    setLoading(isLoading: boolean) {
      patchState(store, { isLoading });
    },
    setTheme(theme: 'light' | 'dark') {
      patchState(store, { theme });
      localStorage.setItem('theme', theme);
    },
    setOnlineStatus(isOnline: boolean) {
      patchState(store, { isOnline });
    },
  }))
);

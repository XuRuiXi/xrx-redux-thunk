type Action = {
  type: string;
  payload: unknown;
} | Function

type FirProp = {
  dispatch: (p: Action) => void;
  getState: () => any;
}

export const a = 1111;;
type Next = (p: Action) => void

export default ({ getState, dispatch }: FirProp) => (next: Next) => (action: Action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  } else {
    return next(action);
  }
};

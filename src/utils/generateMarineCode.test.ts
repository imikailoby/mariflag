import { generateMarineCode } from './generateMarineCode';

describe('generateMarineCode()', () => {
  it('returns an empty string if the input is empty', () => {
    expect(generateMarineCode('')).toBe('');
  });

  it('returns a correct SVG string for a given input with a default configuration', () => {
    expect(generateMarineCode('abc')).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="176px" height="48px"><g transform="translate(0, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(64, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(128, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></g></svg>',
    );
  });
});

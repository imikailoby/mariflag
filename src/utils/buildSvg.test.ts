import { DEFAULT_CONFIG } from '../constants/config';
import { svgFlagsByLetter } from '../constants/svgFlagsByLetter';
import { buildSvg } from './buildSvg';

describe('buildSvg()', () => {
  it('returns a string with an SVG element with default configuration', () => {
    expect(buildSvg([svgFlagsByLetter.A, svgFlagsByLetter.B, svgFlagsByLetter.C], DEFAULT_CONFIG)).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="176px" height="48px"><g transform="translate(0, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(64, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(128, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></g></svg>',
    );
  });

  describe('orientation', () => {
    it('returns a string with an SVG element for horizontal orientation', () => {
      expect(
        buildSvg([svgFlagsByLetter.A, svgFlagsByLetter.B, svgFlagsByLetter.C], {
          ...DEFAULT_CONFIG,
          orientation: 'horizontal',
        }),
      ).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="176px" height="48px"><g transform="translate(0, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(64, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(128, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></g></svg>',
      );
    });

    it('returns a string with an SVG element for vertical orientation', () => {
      expect(
        buildSvg([svgFlagsByLetter.A, svgFlagsByLetter.B, svgFlagsByLetter.C], {
          ...DEFAULT_CONFIG,
          orientation: 'vertical',
        }),
      ).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="176px"><g transform="translate(0, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(0, 64)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(0, 128)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></g></svg>',
      );
    });
  });

  describe('offset', () => {
    it('returns a string with an SVG element with custom offset', () => {
      expect(
        buildSvg([svgFlagsByLetter.A, svgFlagsByLetter.B, svgFlagsByLetter.C], {
          ...DEFAULT_CONFIG,
          offset: 0,
        }),
      ).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="144px" height="48px"><g transform="translate(0, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(48, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg></g><g transform="translate(96, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></g></svg>',
      );
    });
  });

  it('returns a string with an SVG element for the elements with different sizes', () => {
    const elements = [
      '<svg width="10" height="100" />',
      '<svg width="120" height="15" />',
      '<svg width="75" height="82" />',
    ];
    expect(buildSvg(elements, { ...DEFAULT_CONFIG, orientation: 'horizontal' })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="237px" height="100px"><g transform="translate(0, 0)"><svg width="10" height="100" /></g><g transform="translate(26, 0)"><svg width="120" height="15" /></g><g transform="translate(162, 0)"><svg width="75" height="82" /></g></svg>',
    );
    expect(buildSvg(elements, { ...DEFAULT_CONFIG, orientation: 'vertical' })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="120px" height="229px"><g transform="translate(0, 0)"><svg width="10" height="100" /></g><g transform="translate(0, 116)"><svg width="120" height="15" /></g><g transform="translate(0, 147)"><svg width="75" height="82" /></g></svg>',
    );
    expect(buildSvg(elements, { ...DEFAULT_CONFIG, orientation: 'horizontal', offset: 10 })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="225px" height="100px"><g transform="translate(0, 0)"><svg width="10" height="100" /></g><g transform="translate(20, 0)"><svg width="120" height="15" /></g><g transform="translate(150, 0)"><svg width="75" height="82" /></g></svg>',
    );
  });
});

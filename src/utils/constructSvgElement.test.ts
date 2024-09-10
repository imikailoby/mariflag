import { DEFAULT_SVG_CONFIG } from '../config/svgConfig';
import { defaultIcons } from '../constants/defaultIcons';
import { constructSvgElement } from './constructSvgElement';

describe('constructSvgElement()', () => {
  it('constructs SVG element string with default configuration', () => {
    expect(constructSvgElement([defaultIcons.A, defaultIcons.B, defaultIcons.C], DEFAULT_SVG_CONFIG)).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="176px" height="48px"><svg x="0" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg><svg x="64" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg><svg x="128" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></svg>',
    );
  });

  describe('orientation', () => {
    it('constructs SVG element string with horizontal orientation', () => {
      expect(
        constructSvgElement([defaultIcons.A, defaultIcons.B, defaultIcons.C], {
          ...DEFAULT_SVG_CONFIG,
          orientation: 'horizontal',
        }),
      ).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="176px" height="48px"><svg x="0" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg><svg x="64" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg><svg x="128" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></svg>',
      );
    });

    it('constructs SVG element string with vertical orientation', () => {
      expect(
        constructSvgElement([defaultIcons.A, defaultIcons.B, defaultIcons.C], {
          ...DEFAULT_SVG_CONFIG,
          orientation: 'vertical',
        }),
      ).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="176px"><svg x="0" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg><svg x="0" y="64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg><svg x="0" y="128" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></svg>',
      );
    });
  });

  describe('offset', () => {
    it('constructs SVG element string with custom offset', () => {
      expect(
        constructSvgElement([defaultIcons.A, defaultIcons.B, defaultIcons.C], {
          ...DEFAULT_SVG_CONFIG,
          offset: 0,
        }),
      ).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="144px" height="48px"><svg x="0" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"/><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg><svg x="48" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M0 0h24v48H0zM24 0h24L36 24l12 24H24V0Z"/><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"/></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"/></svg><svg x="96" y="0" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#002CFF" d="M0 0h48v12H0z"/><path fill="#fff" d="M0 12h48v8H0zM0 28h48v8H0z"/><path fill="#FF1000" d="M0 20h48v8H0z"/><path fill="#002BFD" d="M0 36h48v12H0z"/><path stroke="#000" d="M.5.5h47v47H.5z"/></svg></svg>',
      );
    });
  });

  it('constructs SVG element string for the elements with different sizes', () => {
    const elements = [
      '<svg width="10" height="100" />',
      '<svg width="120" height="15" />',
      '<svg width="75" height="82" />',
    ];
    expect(constructSvgElement(elements, { ...DEFAULT_SVG_CONFIG, orientation: 'horizontal' })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="237px" height="100px"><svg x="0" y="0" width="10" height="100" /><svg x="26" y="0" width="120" height="15" /><svg x="162" y="0" width="75" height="82" /></svg>',
    );
    expect(constructSvgElement(elements, { ...DEFAULT_SVG_CONFIG, orientation: 'vertical' })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="120px" height="229px"><svg x="0" y="0" width="10" height="100" /><svg x="0" y="116" width="120" height="15" /><svg x="0" y="147" width="75" height="82" /></svg>',
    );
    expect(constructSvgElement(elements, { ...DEFAULT_SVG_CONFIG, orientation: 'horizontal', offset: 10 })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="225px" height="100px"><svg x="0" y="0" width="10" height="100" /><svg x="20" y="0" width="120" height="15" /><svg x="150" y="0" width="75" height="82" /></svg>',
    );
  });
});

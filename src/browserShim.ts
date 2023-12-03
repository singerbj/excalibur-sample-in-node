
// declare global {
//   var phaserOnNodeFPS: number
// }

import Canvas from 'canvas'
import jsdom from 'jsdom'
import FakeXMLHttpRequest from './fakeXMLHttpRequest'

const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
const noop = () => {}

const document = dom.window.document
const window = dom.window
window.focus = () => {}

global.document = document as any
global.window = window as any
global.Window = Object as any
global.window.Element = undefined as any
global.navigator = { userAgent: 'node' } as any
global.Image = Canvas.Image as any
global.XMLHttpRequest = FakeXMLHttpRequest as any
global.HTMLCanvasElement = window.HTMLCanvasElement
global.HTMLVideoElement = window.HTMLVideoElement

// @ts-expect-error
global.window.DOMMatrix = Canvas.DOMMatrix;
// @ts-expect-error
global.DOMMatrix = Canvas.DOMMatrix;
global.Image.prototype.decode = () => {
    return new Promise((resolve) => {
        resolve(undefined);
    });
}
global.Image.prototype.setAttribute = () => {}

global.Image.prototype.dataset = {}

type MediaQueryListener = (this: MediaQueryList, ev: MediaQueryListEvent) => void;

// @ts-expect-error
global.window.matchMedia = (string: string) => {
    return {
        matches: true,
        media: '',
        onchange: null,
        addListener: (listener: MediaQueryListener) => {},
        removeListener: (listener: MediaQueryListener) => {},
        addEventListener: (type: 'change', listener: MediaQueryListener) => {},
        removeEventListener: (type: 'change', listener: MediaQueryListener) => {},
        dispatchEvent: (event: Event) => true
    }
}

// @ts-ignore
global.URL = URL || noop
global.URL.createObjectURL = (base64: any) => `data:image/png;base64,${base64}`
global.URL.revokeObjectURL = () => {}

console.log("browserShim Run")

// const animationFrame = (cb: any) => {
//   const now = performance.now()
//   if (typeof cb !== 'function') return 0 // this line saves a lot of cpu
//   window.setTimeout(() => cb(now), 1000 / global.phaserOnNodeFPS)
//   return 0
// }
// export { animationFrame }

// window.requestAnimationFrame = (cb: any) => {
//   return animationFrame(cb)
// }

// const requestAnimationFrame = window.requestAnimationFrame
// export { requestAnimationFrame }
import { theme } from "../Theme"

/* Mobile only */
export function mobileOnly() {
    return `(max-width: ${theme.breakpoint.mobile}px)`
}

/* Tablet only */
export function tabletOnly() {
    return `(min-width: ${theme.breakpoint.mobile+1}px) and (max-width: ${theme.breakpoint.tablet}px)`
}

/* Desktop only */
export function desktopOnly() {
    return `(min-width: ${theme.breakpoint.tablet+1}px)`
}

/* Tablet Up */
export function tabletUp() {
    return `(min-width: ${theme.breakpoint.mobile+1}px)`
}

/* Desktop Up */
export function desktopUp() {
    return `(min-width: ${theme.breakpoint.tablet+1}px)`
}
export function getBuild() {
  return {
    assetsInlineLimit: 0,
    rolldownOptions: {
      treeshake: { manualPureFunctions: ['Object.freeze'] },
    },
  }
}

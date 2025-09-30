const refineMasonryLayout = (gridId, grid) => {
    const layoutContainer = gridId ? document.getElementById(gridId) : grid;
    if (layoutContainer) {
        const tileElements = layoutContainer.children;
        let previousOffset = 0;
        let currentRow = 1;
        for (const tileElement of tileElements) {
            if (tileElement.offsetTop > previousOffset) {
                currentRow++;
            }
            previousOffset = tileElement.offsetTop;
            tileElement.classList.add('row');
            tileElement.classList.add('row-' + currentRow);
            if (currentRow % 2 == 0) {
                tileElement.classList.add('custom-shifted');
            }
        }
    }
};
export const refineAllMasonryLayouts = () => {
    const adjustedGridChildren = document.getElementsByClassName('custom-shifted');
    for (const adjusted of adjustedGridChildren) {
        adjusted.classList.remove('custom-shifted');
    }
    const masonryGridElements = document.getElementsByClassName('custom-grid-has-row-behavior');
    for (const masonry of masonryGridElements) {
        refineMasonryLayout(undefined, masonry);
    }
};
const refineWrapper = () => {
    refineAllMasonryLayouts();
};
export const initMasonryLayouts = () => {
    document.addEventListener('DOMContentLoaded', refineWrapper);
    window.addEventListener('resize', refineWrapper);
};
export const removeMasonryEventListeners = () => {
    document.removeEventListener('DOMContentLoaded', refineWrapper);
    window.removeEventListener('resize', refineWrapper);
};
export default refineMasonryLayout;

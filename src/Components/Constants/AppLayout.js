
export const layoutStateConstant = {
    left: {
        topsliderArrangement: {
            className: 'flex-col'
        },
        topsliderCover: {
            initial: {
                height: '100%'
            },
            animate: {
                height: '35%'
            },
            exit: {
                height: '100%'
            },
            className: 'w-full h-[35%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal'
        },
        topsliderBg: {
            className: 'w-full h-[35%]'
        },
        topsliderChildren: {
            className: 'w-full h-[65%]'
        },
        appArrangement: {
            className: 'flex-row-reverse'
        },
        appTitle: {
            className: 'h-full items-center pl-10',
            close: { width: '100%', height: '100%' },
            open: { width: '35%', height: '100%' },
        },
        appheader: {
            className: 'h-full w-[35%] '
        },
        appChildren: {
            className: 'h-full w-[65%]'
        },
        appMenuSvg: {
            className: 'bottom-0 left-2',
            initial: { x: -100 },
            animate: { x: 0 },
            exit: { x: [10, 15, 20, -100] }
        }
    },
    leftopp: {
        topsliderArrangement: {
            className: 'flex-col-reverse'
        },
        topsliderCover: {
            initial: {
                height: '100%'
            },
            animate: {
                height: '35%'
            },
            exit: {
                height: '100%'
            },
            className: 'w-full h-[35%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal'
        },
        topsliderBg: {
            className: 'w-full h-[35%]'
        },
        topsliderChildren: {
            className: 'w-full h-[65%]'
        },
        appArrangement: {
            className: 'flex-row-reverse'
        },
        appTitle: {
            className: 'h-full items-center pl-10',
            close: { width: '100%', height: '100%' },
            open: { width: '35%', height: '100%' },
        },
        appheader: {
            className: 'h-full w-[35%] '
        },
        appChildren: {
            className: 'h-full w-[65%]'
        },
        appMenuSvg: {
            className: 'bottom-0 left-2',
            initial: { x: -100 },
            animate: { x: 0 },
            exit: { x: [10, 15, 20, -100] }
        }
    },
    right: {
        topsliderArrangement: {
            className: 'flex-col'
        },
        topsliderCover: {
            initial: {
                height: '100%'
            },
            animate: {
                height: '35%'
            },
            exit: {
                height: '100%'
            },
            className: 'w-full h-[35%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal'
        },
        topsliderBg: {
            className: 'w-full h-[35%]'
        },
        topsliderChildren: {
            className: 'w-full h-[65%]'
        },
        appArrangement: {
            className: 'flex-row'
        },
        appTitle: {
            className: 'h-full items-center justify-end pr-10',
            close: { width: '100%', height: '100%' },
            open: { width: '35%', height: '100%' },
        },
        appheader: {
            className: 'h-full w-[35%] '
        },
        appChildren: {
            className: 'h-full w-[65%]'
        },
        appMenuSvg: {
            className: 'bottom-0 right-2',
            initial: { x: 100 },
            animate: { x: 0 },
            exit: { x: [-10, -15, -20, 100] }
        }
    },
    rightopp: {
        topsliderArrangement: {
            className: 'flex-col-reverse'
        },
        topsliderCover: {
            initial: {
                height: '100%'
            },
            animate: {
                height: '35%'
            },
            exit: {
                height: '100%'
            },
            className: 'w-full h-[35%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal'
        },
        topsliderBg: {
            className: 'w-full h-[35%]'
        },
        topsliderChildren: {
            className: 'w-full h-[65%]'
        },
        appArrangement: {
            className: 'flex-row'
        },
        appTitle: {
            className: 'h-full items-center justify-end pr-10',
            close: { width: '100%', height: '100%' },
            open: { width: '35%', height: '100%' },
        },
        appheader: {
            className: 'h-full w-[35%] '
        },
        appChildren: {
            className: 'h-full w-[65%]'
        },
        appMenuSvg: {
            className: 'bottom-0 right-2',
            initial: { x: 100 },
            animate: { x: 0 },
            exit: { x: [-10, -15, -20, 100] }
        }
    },
    top: {
        topsliderArrangement: {
            className: 'flex'
        },
        topsliderCover: {
            initial: {
                width: '100%'
            },
            animate: {
                width: '35%'
            },
            exit: {
                width: '100%'
            },
            className: 'h-full w-[35%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical_top_bottom'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal_top_bottom'
        },
        topsliderBg: {
            className: 'h-full w-[35%]'
        },
        topsliderChildren: {
            className: 'h-full w-[65%]'
        },
        appArrangement: {
            className: 'flex-col'
        },
        appTitle: {
            className: 'w-full items-end justify-center pb-10',
            close: { height: '100%', width: '100%' },
            open: { height: '35%', width: '100%' },
        },
        appheader: {
            className: 'w-full h-[35%] '
        },
        appChildren: {
            className: 'w-full h-[65%]'
        },
        appMenuSvg: {
            className: 'bottom-0 right-2',
            initial: { y: 100 },
            animate: { y: 0 },
            exit: { y: [-10, -15, -20, 100] }
        }
    },
    topopp: {
        topsliderArrangement: {
            className: 'flex-row-reverse'
        },
        topsliderCover: {
            initial: {
                width: '100%'
            },
            animate: {
                width: '35%'
            },
            exit: {
                width: '100%'
            },
            className: 'h-full w-[35%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical_top_bottom'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal_top_bottom'
        },
        topsliderBg: {
            className: 'h-full w-[35%]'
        },
        topsliderChildren: {
            className: 'h-full w-[65%]'
        },
        appArrangement: {
            className: 'flex-col'
        },
        appTitle: {
            className: 'w-full items-end justify-center pb-10',
            close: { height: '100%', width: '100%' },
            open: { height: '35%', width: '100%' },
        },
        appheader: {
            className: 'w-full h-[35%] '
        },
        appChildren: {
            className: 'w-full h-[65%]'
        },
        appMenuSvg: {
            className: 'bottom-0 right-2',
            initial: { y: 100 },
            animate: { y: 0 },
            exit: { y: [-10, -15, -20, 100] }
        }
    },
    bottom: {
        topsliderArrangement: {
            className: 'flex'
        },
        topsliderCover: {
            initial: {
                width: '100%'
            },
            animate: {
                width: '35%'
            },
            exit: {
                width: '100%'
            },
            className: 'h-full w-[35%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical_top_bottom'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal_top_bottom'
        },
        topsliderBg: {
            className: 'h-full w-[35%]'
        },
        topsliderChildren: {
            className: 'h-full w-[65%]'
        },
        appArrangement: {
            className: 'flex-col-reverse'
        },
        appTitle: {
            className: 'w-full items-start justify-center pt-4',
            close: { height: '100%', width: '100%' },
            open: { height: '35%', width: '100%' },
        },
        appheader: {
            className: 'w-full h-[35%] shadow-black'
        },
        appChildren: {
            className: 'w-full h-[65%]'
        },
        appMenuSvg: {
            className: 'top-4 right-2',
            initial: { y: -100 },
            animate: { y: 0 },
            exit: { y: [10, 15, 20, -100] }
        }
    },
    bottomopp: {
        topsliderArrangement: {
            className: 'flex-row-reverse'
        },
        topsliderCover: {
            initial: {
                width: '100%'
            },
            animate: {
                width: '35%'
            },
            exit: {
                width: '100%'
            },
            className: 'h-full w-[35%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical_top_bottom'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal_top_bottom'
        },
        topsliderBg: {
            className: 'h-full w-[35%]'
        },
        topsliderChildren: {
            className: 'h-full w-[65%]'
        },
        appArrangement: {
            className: 'flex-col-reverse'
        },
        appTitle: {
            className: 'w-full items-start justify-center pt-4',
            close: { height: '100%', width: '100%' },
            open: { height: '35%', width: '100%' },
        },
        appheader: {
            className: 'w-full h-[35%] shadow-black'
        },
        appChildren: {
            className: 'w-full h-[65%]'
        },
        appMenuSvg: {
            className: 'top-4 right-2',
            initial: { y: -100 },
            animate: { y: 0 },
            exit: { y: [10, 15, 20, -100] }
        }
    },
    mobile: {
        topsliderArrangement: {
            className: 'flex-col'
        },
        topsliderCover: {
            initial: {
                height: '100%'
            },
            animate: {
                height: '20%'
            },
            exit: {
                height: '100%'
            },
            className: 'w-full h-[20%]'
        },
        topsliderCoverVline: {
            className: 'headerbox__vertical'
        },
        topsliderCoverHline: {
            className: 'headerbox__horizontal'
        },
        topsliderBg: {
            className: 'w-full h-[20%]'
        },
        topsliderChildren: {
            className: 'w-full h-[80%]'
        },
        appArrangement: {
            className: 'flex-col'
        },
        appTitle: {
            className: 'w-full items-center pl-10',
            close: { height: '100%', width: '100%' },
            open: { height: '15%', width: '100%' },
        },
        appheader: {
            className: 'w-full h-[15%] '
        },
        appChildren: {
            className: 'w-full h-[85%]'
        },
        appMenuSvg: {
            className: 'bottom-0 right-2',
            initial: { y: 100 },
            animate: { y: 0 },
            exit: { y: [-10, -15, -20, 100] }
        }
    },
    getRandomState: () => {
        return layoutStateName[Math.floor(Math.random() * (layoutStateName.length - 1))];
        // // return layoutStateName[Math.floor(Math.random() * 4)];
        // return 'left';
    },
    getRandomNumber: () => {
        return Math.floor(Math.random() * 4) + 2
    }
}

export const layoutStateName = [
    'left',
    'leftopp',
    'right',
    'rightopp',
    'top',
    'topopp',
    'bottom',
    'bottomopp',
]


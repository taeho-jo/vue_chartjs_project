const importComponent = filePath => () =>
  import(/* webpackChunkName: "insight" */ `@/components/${filePath}`);

const barChart = [
  {
    path: '0',
    component: 'BarChart',
  },
  {
    path: '1',
    component: 'HorizontalBar',
  },
  {
    path: '2',
    component: 'DivergingBar',
  },
  {
    path: '3',
    component: 'StackedBar',
  },
  {
    path: '4',
    component: 'StackedHorizontal',
  },
  {
    path: '5',
    component: 'StackedNormalized',
  },
  {
    path: '6',
    component: 'GropedBar',
  },
  {
    path: '7',
    component: 'DivergingStacked',
  }
];
const lineChart = [
  {
    path: '0',
    component: 'LineChart',
  },
  {
    path: '1',
    component: 'LineWithMissing',
  },
  {
    path: '2',
    component: 'MultiLine',
  },
  {
    path: '3',
    component: 'ChangeLine',
  },
  {
    path: '4',
    component: 'Trains',
  },
  {
    path: '5',
    component: 'Candlestick',
  },
  {
    path: '6',
    component: 'VariableColor',
  },
  {
    path: '7',
    component: 'Gradient',
  }
];
export const barChartPath = barChart.reduce(
  (acc, route) =>
    acc.concat([
      {
        path: route.path,
        name: route.component,
        meta: {
          name: route.component,
        },
        component: importComponent(`bar/${route.component}`),
      },
    ]),
  [],
);
export const lineChartPath = lineChart.reduce(
  (acc, route) =>
    acc.concat([
      {
        path: route.path,
        name: route.component,
        meta: {
          name: route.component,
        },
        component: importComponent(`line/${route.component}`),
      },
    ]),
  [],
);

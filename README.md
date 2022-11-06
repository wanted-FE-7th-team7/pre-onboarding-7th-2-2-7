# **team7-week2-2**

원티드 프론트엔드 프리온보딩 7차 7팀 2-2 과제 레포리토리입니다

### **배포 주소**

[http://team7-week1-2.s3-website.ap-northeast-2.amazonaws.com/](http://team7-week1-2.s3-website.ap-northeast-2.amazonaws.com/)

### **폴더구조**

```
📦src
 ┣ 📂components
 ┃ ┣ 📜AdList.tsx
 ┃ ┣ 📜AdSelector.tsx
 ┃ ┣ 📜ComparedTrends.tsx
 ┃ ┣ 📜DashBoardDate.tsx
 ┃ ┣ 📜DatePickerForm.tsx
 ┃ ┣ 📜Layout.tsx
 ┃ ┣ 📜MultiChart.tsx
 ┃ ┗ 📜Routers.tsx
 ┣ 📂data
 ┃ ┣ 📜ad-list-data-set.json
 ┃ ┗ 📜trend-data-set.json
 ┣ 📂hooks
 ┃ ┗ 📜useData.ts
 ┣ 📂images
 ┃ ┣ 📜Lever_BI 1.png
 ┃ ┣ 📜MY.png
 ┃ ┣ 📜guide.png
 ┃ ┣ 📜ring.png
 ┃ ┗ 📜setting.png
 ┣ 📂pages
 ┃ ┣ 📜AdManagementPage.tsx
 ┃ ┗ 📜DashboardPage.tsx
 ┣ 📂repository
 ┃ ┣ 📜adRepository.local.ts
 ┃ ┗ 📜trendRepository.local.ts
 ┣ 📂services
 ┃ ┣ 📜adService.local.ts
 ┃ ┗ 📜trendService.local.ts
 ┣ 📂store
 ┃ ┣ 📜ad.recoil.ts
 ┃ ┗ 📜trend.recoil.ts
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.ts
 ┣ 📂utils
 ┃ ┣ 📜getFormatDate.ts
 ┃ ┣ 📜lazyFunction.ts
 ┃ ┗ 📜routes.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

1. components : 프로젝트에서 사용되는 컴포넌트 관리
   1. UIs: 공통으로 사용되는 UI 컴포넌트 관리
2. data: 공통으로 사용하는 데이터
3. hooks : 공통으로 사용되는 hooks 관리
4. images: 공통으로 사용하는 이미지
5. pages : 페이지 단위 컴포넌트 폴더
6. repository: 저장소를 추상화한 파일을 저장하는 폴더
7. services: 각종 비즈니스 로직을 저장한 폴더
8. store: recoil 관련된 파일을 저장한 폴더
9. styles: 공통으로 사용되는 스타일 관리
10. utils : 공통으로 사용되는 기타 함수 관리

### 사이드바

```tsx
<div className="nav">
  <img className="logo" src={logo} alt="logo" />
  <hr className="HR" />
  <div>
    <div className="service-title">서비스</div>
    <select className="madup-select">
      <option>매드업</option>
      <option>추가하기</option>
    </select>
  </div>
  <nav className="links">
    <div>광고 센터</div>
    <Link
      className={`router ${location.pathname === '/' ? 'active' : ''}`}
      to="/"
    >
      대시보드
    </Link>
    <Link
      className={`router ${
        location.pathname === '/ad-management' ? 'active' : ''
      }`}
      to="/ad-management"
    >
      광고관리
    </Link>
  </nav>
  <img src={guide} alt="guide" />
</div>
```

- 별다른 로직 없이 React Router DOM의 Link만을 사용해서 구현

### 상태 관리

```tsx
const adRepository = new LocalAdRepository();
const adService = new LocalAdService(adRepository);

const adsState = atom<Ad[]>({
  key: 'adsState',
  default: selector<Ad[]>({
    key: 'adsState/init',
    get: async () => await adService.getAds(),
  }),
});

const adsStatusState = atom<AdsStatus>({
  key: 'adFilterState',
  default: 'all',
});

const filteredAdsState = selector<Ad[]>({
  key: 'filteredAdsState',
  get: ({ get }) => {
    const ads = get(adsState);
    const status = get(adsStatusState);

    return status === 'all' ? ads : ads.filter(ad => ad.status === status);
  },
});

export const useAdsStatusState = () => {
  return useRecoilState(adsStatusState);
};

export const useFilteredAdsValue = () => {
  return useRecoilValue(filteredAdsState);
};
```

- Recoil을 통해 전역 상태를 관리하고, 필요한 hook을 제작하여 사용자가 사용하기 편리하게 추가

### 대시보드 - 통합 광고 현황

```tsx
const comparedTrendsState = selector<{
  before: Trend[];
  current: Trend[];
}>({
  key: 'comparedTrendsState',
  get: ({ get }) => {
    const { start, end } = get(trendsDateRangeState);

    const gap = dayjs(end).diff(start, 'day', true) + 1;

    const before = get(trendsState).filter(
      ({ date }) =>
        new Date(dayjs(start).subtract(gap, 'day').toString()) <=
          new Date(dayjs(date).set('hour', 0).toString()) &&
        new Date(dayjs(date).set('hour', 0).toString()) <=
          new Date(dayjs(end).subtract(gap, 'day').toString())
    );

    const current = get(trendsState).filter(
      ({ date }) =>
        new Date(start) <= new Date(date) && new Date(date) <= new Date(end)
    );

    return { before, current };
  },
});
```

- 선택된 날짜의 시작과 끝의 차이를 구해 해당 차이만큼 앞뒤로 빼줘 해당되는 날짜만 받아옴.

```tsx
function ComparedTrends() {
  const { before, current } = useComparedTrendsState();

  const data = {
    ROAS: {
      before: before.reduce((prev, cur) => cur.roas + prev, 0),
      current: current.reduce((prev, cur) => cur.roas + prev, 0) / 100,
      symbol: '%',
    },

    광고비: {
      before: before.reduce((prev, cur) => cur.cost + prev, 0),
      current: current.reduce((prev, cur) => cur.cost + prev, 0) / 10000,
      symbol: '만 원',
    },

    노출수: {
      before: before.reduce((prev, cur) => cur.imp + prev, 0),
      current: current.reduce((prev, cur) => cur.imp + prev, 0) / 10000,
      symbol: '만 회',
    },

    클릭수: {
      before: before.reduce((prev, cur) => cur.click + prev, 0),
      current: current.reduce((prev, cur) => cur.click + prev, 0) / 10000,
      symbol: '만 회',
    },

    전환수: {
      before: before.reduce((prev, cur) => cur.conv + prev, 0),
      current: current.reduce((prev, cur) => cur.conv + prev, 0) / 10000,
      symbol: '만 회',
    },

    매출: {
      before: before.reduce((prev, cur) => cur.convValue + prev, 0),
      current:
        current.reduce((prev, cur) => cur.convValue + prev, 0) / 100000000,
      symbol: '억 원',
    },
  };

  return (
    <S.Table>
      {Object.entries(data).map(item => (
        <TrendCard title={item[0]} value={item[1]} key={item[0]} />
      ))}
    </S.Table>
  );
}
```

- 받아온 날짜를 reduce를 통해 계산하여 적절한 형태로 보여줌.

### 대시보드 - 차트

```tsx
export function MultiChart() {
  const data = useFilteredTrendsValue();
  const [selects, setSelects] = useTrendsSelectsState();

  const [labels, setLabels] = useState(data.map(data => data.date));
  const [roas, setRoas] = useState(data.map(data => data.roas));
  const [cost, setCost] = useState(data.map(data => data.cost));
  const [imp, setImp] = useState(data.map(data => data.imp));
  const [click, setClick] = useState(data.map(data => data.click));
  const [conv, setConv] = useState(data.map(data => data.conv));
  const [convValue, setConvValue] = useState(data.map(data => data.convValue));

  const getData = (selectedOption: string) => {
    switch (selectedOption) {
      case 'roas':
        return roas;
      case 'cost':
        return cost;
      case 'imp':
        return imp;
      case 'click':
        return click;
      case 'conv':
        return conv;
      case 'convValue':
        return convValue;
      default:
        return new Error('알 수 없는 값입니다.');
    }
  };

  const [showData, setShowData] = useState(getData(selects[0]));
  const [showDataSecond, setShowDataSecond] = useState(getData(selects[1]));

  const dataSet = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        borderColor: 'rgb(36, 141, 238)',
        borderWidth: 1,
        fill: false,
        data: showData,
        yAxisID: 'y',
      },
      {
        type: 'line' as const,
        borderColor: 'rgb(13, 184, 42)',
        borderWidth: 1,
        fill: false,
        data: showDataSecond,
        yAxisID: 'y1',
      },
    ],
  };

  const options: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  useEffect(() => {
    setLabels(data.map(data => data.date));
    setRoas(data.map(data => data.roas));
    setCost(data.map(data => data.cost));
    setImp(data.map(data => data.imp));
    setClick(data.map(data => data.click));
    setConv(data.map(data => data.conv));
    setConvValue(data.map(data => data.convValue));

    onChangeSelectFirst(selects[0]);
    onChangeSelectFirst(selects[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onChangeSelectFirst = (selectedOption: string) => {
    switch (selectedOption) {
      case 'roas':
        setShowData(roas);
        break;
      case 'cost':
        setShowData(cost);
        break;
      case 'imp':
        setShowData(imp);
        break;
      case 'click':
        setShowData(click);
        break;
      case 'conv':
        setShowData(conv);
        break;
      case 'convValue':
        setShowData(convValue);
        break;
      default:
        return new Error('알 수 없는 값입니다.');
    }
    setSelects(selects => [selectedOption, selects[1]]);
  };

  const onChangeSelectSecond = (selectedOption: string) => {
    switch (selectedOption) {
      case 'roas':
        setShowDataSecond(roas);
        break;
      case 'cost':
        setShowDataSecond(cost);
        break;
      case 'imp':
        setShowDataSecond(imp);
        break;
      case 'click':
        setShowDataSecond(click);
        break;
      case 'conv':
        setShowDataSecond(conv);
        break;
      case 'convValue':
        setShowDataSecond(convValue);
        break;
      case '':
        setShowDataSecond([]);
        break;
      default:
        return new Error('알 수 없는 값입니다.');
    }
    setSelects(selects => [selects[0], selectedOption]);
  };

  return (
    <>
      <S.Selection>
        <select
          onChange={e => onChangeSelectFirst(e.target.value)}
          value={selects[0]}
        >
          <option value="roas">ROAS</option>
          <option value="cost">광고비</option>
          <option value="imp">노출수</option>
          <option value="click">클릭수</option>
          <option value="conv">전환수</option>
          <option value="convValue">매출</option>
        </select>
        <select
          onChange={e => onChangeSelectSecond(e.target.value)}
          value={selects[1]}
        >
          <option value="">선택안함</option>
          <option value="roas">ROAS</option>
          <option value="cost">광고비</option>
          <option value="imp">노출수</option>
          <option value="click">클릭수</option>
          <option value="conv">전환수</option>
          <option value="convValue">매출</option>
        </select>
      </S.Selection>
      <Chart type="bar" data={dataSet} options={options} />
    </>
  );
}
```

- `chart.js` 사용

### 광고 관리

```tsx
<S.CardList>
  {ads.map(
    ({
      id,
      title,
      adType,
      budget,
      status,
      endDate,
      startDate,
      report: { cost, convValue, roas },
    }) => (
      <S.Card key={id}>
        <header>{`${convertAdType(adType)}_${title}`}</header>
        <ul>
          <hr />
          <li>
            <span>상태</span>
            <span>{status === 'active' ? '진행중' : '종료'}</span>
          </li>
          <hr />
          <li>
            <span>광고 생성일</span>
            <span>
              {dayjs(startDate).format('YYYY-MM-DD')}
              {endDate ? `(${dayjs(endDate).format('YYYY-MM-DD')})` : ''}
            </span>
          </li>
          <hr />
          <li>
            <span>일 희망 예산</span>
            <span>{Math.round(budget / 10000).toLocaleString()}만원</span>
          </li>
          <hr />
          <li>
            <span>광고 수익률</span>
            <span>{roas}%</span>
          </li>
          <hr />
          <li>
            <span>매출</span>
            <span>{Math.round(convValue / 10000).toLocaleString()}만원</span>
          </li>
          <hr />
          <li>
            <span>광고 비용</span>
            <span>{Math.round(cost / 10000).toLocaleString()}만원</span>
          </li>
          <hr />
        </ul>
        <button>수정하기</button>
      </S.Card>
    )
  )}
</S.CardList>
```

- 데이터와 filter를 Recoil에서 받아오고, recoil selector를 이용하여 필터된 데이터만 가져옴.
- 가져온 데이터를 규격에 맞게 변환하여 보여줌.

### Git convention

| Tag Name | Description                                       |
| -------- | ------------------------------------------------- |
| Feat     | 새로운 기능 추가                                  |
| Fix      | 에러 수정                                         |
| Docs     | 문서 수정                                         |
| Style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| Refactor | 코드 리팩토링                                     |
| Test     | 테스트 추가, 테스트 리팩토링                      |
| Chore    | 빌드 업무 수정, 패키지 매니저 수정                |

import React from 'react';
import ComparedTrends from '../components/ComparedTrends';
import DatePickerForm from '../components/DatePickerForm';
import { MultiChart } from '../components/MultiChart';

function DashboardPage() {
  return (
    <main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <header>
          <div>대시보드</div>
          <DatePickerForm />
        </header>
        <section>
          <h2>통합 광고 현황</h2>
          <section>
            <ComparedTrends />
            <MultiChart />
          </section>
        </section>
      </React.Suspense>
    </main>
  );
}

export default DashboardPage;

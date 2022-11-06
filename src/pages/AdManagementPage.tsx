import React from 'react';
import { AdList } from '../components/AdList';
import { AdSelector } from '../components/AdSelector';

function AdManagementPage() {
  return (
    <main>
      <h1>광고관리</h1>
      <section>
        <div>
          <AdSelector />
          <React.Suspense fallback={<div>Loading...</div>}>
            <AdList />
          </React.Suspense>
          <button>광고 만들기</button>
        </div>
      </section>
    </main>
  );
}

export default AdManagementPage;

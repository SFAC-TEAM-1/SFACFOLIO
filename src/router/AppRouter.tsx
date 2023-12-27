import IndexPage from 'pages/IndexPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from 'pages/MyPage';

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/mypage" element={<MyPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;

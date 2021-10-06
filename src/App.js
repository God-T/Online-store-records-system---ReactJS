export const App = () => (
	<div className="App">
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<a class="navbar-brand" href="#">
				Online Store Records App
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active my-2 my-lg-0">
						<a class="nav-link" href="#">
							Customers <span class="sr-only ">(current)</span>
						</a>
					</li>
					<li class="nav-item active my-2 my-lg-0">
						<a class="nav-link" href="#">
							Products <span class="sr-only ">(current)</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
);

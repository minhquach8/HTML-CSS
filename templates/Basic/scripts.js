function toast({ title = "", message = "", type = "info", duration = 3000 }) {
	const main = document.getElementById("toast");
	if (main) {
		const toast = document.createElement("div");

		const icons = {
			success: "fas fa-check-circle",
			info: "fas fa-info-circle",
			warning: "fas fa-exclamation-circle",
			error: "fas fa-exclamation-circle",
		};
		const icon = icons[type];
		const delay = (duration / 1000).toFixed(2);

		toast.classList.add("toast", `toast--${type}`);
		toast.style.animation = `slideInLeft ease-in 0.5s, fadeOut linear 1s ${delay}s forwards`;

		toast.innerHTML = `
            <div class="toast__icon">
				<i class="${icon}"></i>
			</div>
			<div class="toast__body">
				<h3 class="toast__title">${title}</h3>
				<p class="toast__msg">${message}</p>
			</div>
			<div class="toast__close">
				<i class="fas fa-times"></i>
			</div>
        `;
		main.appendChild(toast);

		// Auto remove toast
		const autoRemoveId = setTimeout(() => {
			main.removeChild(toast);
		}, duration + 1000);

		// Manually close toast
		toast.onclick = function (e) {
			if (e.target.closest(".toast__close")) {
				main.removeChild(toast);
				clearTimeout(autoRemoveId);
			}
		};
	}
}

function showSuccessToast() {
	toast({
		title: "Success",
		message: "You got it!!! Let's Goooo",
		type: "success",
		duration: 3000,
	});
}

function showWarningToast() {
	toast({
		title: "Warning",
		message: "You've got a warning!!!",
		type: "warning",
		duration: 3000,
	});
}

function showErrorToast() {
	toast({
		title: "Error",
		message: "Oops! An error has occurred",
		type: "error",
		duration: 3000,
	});
}

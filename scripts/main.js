console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';
import { dropDown } from './navBar.js'

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

const showdropDown = () => {
	const dropDownElement = document.querySelector(".navDropDown");
	dropDownElement.innerHTML = dropDown();
}

navElement.addEventListener("change", (event) => {
	console.log(event);
	const materialSort = event.target.value
	if (materialSort !== "navDropDown"){
		filterLegoMaterial(materialSort)
	} else {
		makeLegoList(useLegos())
	}
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const filterLegoMaterial = (whatMaterial) => {
	console.log(useLegos());
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatMaterial)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const filterLegoSearch = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoId === (whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const searchElement = document.querySelector("input");

searchElement.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		const searchValue = (searchElement.value);
		filterLegoSearch(searchValue)
	}
})

const startEIA = () => {
	showdropDown();
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();
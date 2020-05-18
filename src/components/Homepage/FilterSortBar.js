import React, { useState, useEffect } from "react";
import {
	Nav,
	Container,
	Row,
	Col,
	InputGroup,
	Input,	
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	InputGroupButtonDropdown,
} from "reactstrap";
import { connect } from "react-redux";
import { StyledNavbarText, StyledInputGroup } from "./FilterSortBarStyles";
import { categories } from "../../constants";
import {
	setFilter,
	searchBooks,
	sortBooks,
} from "../../state/ducks/books/action";


const FilterSortBar = (props) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
	
	const [values, setValues] = useState({
		searchTerm: "",
		searchType: "title"
	});

	useEffect(() => {
		props.search(values)
	}, [values])
	
	return (
		<div>
			<Container fluid className="bg-white" style={{ padding: "15px" }}>
				<Row>
					<Col xs={12} md={6}>
						<Nav className="bg-white">
							<StyledNavbarText>
								<strong>Categories:</strong>
							</StyledNavbarText>
							<StyledNavbarText
								active={!props.activeFilter}
								onClick={() => {
									props.changeFilter("");
								}}>
								All
							</StyledNavbarText>
							{categories.map((category) => {
								return (
									<StyledNavbarText
										active={props.activeFilter === category}
										onClick={() => {
											props.changeFilter(category);
										}}>
										{category}
									</StyledNavbarText>
								);
							})}
						</Nav>
					</Col>

					<Col xs={12} md={6}>
						<Row>
                            <Col xs={12} md={6}>
                            <InputGroup>
							
							<InputGroupButtonDropdown
								addonType="append"
								isOpen={dropdownOpen}
								toggle={toggleDropDown}>
								<DropdownToggle caret>Search by: {values.searchType}</DropdownToggle>
								<DropdownMenu>
									<DropdownItem values="Title" onClick={(e)=> {
										setValues({
											...values,
											searchType:"Title"
										})
									}}>Search by Title</DropdownItem>
									
									<DropdownItem values="Author" onClick={(e) => {
											setValues({
												...values,
												searchType:"Author"
											})
									}}>Search by Author</DropdownItem>
								</DropdownMenu>
							</InputGroupButtonDropdown>
							
                            <Input onChange={(e) => {
								
									setValues({
										...values,
										searchTerm: e.target.value
									})
									
								}}/>
								
						</InputGroup>
                            </Col>
                       
                            <Col xs={12} md={6}>
                            <StyledInputGroup>
							<Input
								type="select"
								name="select"
								id="exampleSelect"
								onChange={(e) => {
									props.sort(e.target.value);
								}}>
								<option value="">No Sort</option>
								<option value="alphabetical">Sort Alphabetical</option>
								<option value="rating">Sort by Rating</option>
							</Input>
							</StyledInputGroup>
                            </Col>
						
                        </Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		activeFilter: state.books.filter,

	};
};

const mapDispatchToProps = {
	changeFilter: setFilter,
	search: searchBooks,
	sort: sortBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSortBar);

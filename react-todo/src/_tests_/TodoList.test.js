import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";



/* Test 1: Initial Render */

test("renders TodoList with initial todos", () => {

  render(<TodoList />);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  expect(screen.getByText("Practice Coding")).toBeInTheDocument();

});



/* Test 2: Add Todo */

test("adds a new todo", () => {

  render(<TodoList />);

  const input = screen.getByPlaceholderText("Enter todo");

  const button = screen.getByText("Add Todo");

  fireEvent.change(input, {
    target: { value: "New Test Todo" }
  });

  fireEvent.click(button);

  expect(
    screen.getByText("New Test Todo")
  ).toBeInTheDocument();

});



/* Test 3: Toggle Todo */

test("toggles a todo item", () => {

  render(<TodoList />);

  const todo = screen.getByText("Learn React");

  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");

});



/* Test 4: Delete Todo */

test("deletes a todo item", () => {

  render(<TodoList />);

  const deleteButtons = screen.getAllByText("Delete");

  fireEvent.click(deleteButtons[0]);

  expect(
    screen.queryByText("Learn React")
  ).not.toBeInTheDocument();

});
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import TodoList from "../components/TodoList"

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />)
    expect(screen.getByText("Learn React")).toBeInTheDocument()
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument()
  })

  test("adds a new todo", () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText("Add new todo")
    const addButton = screen.getByText("Add")

    fireEvent.change(input, { target: { value: "New Task" } })
    fireEvent.click(addButton)

    expect(screen.getByText("New Task")).toBeInTheDocument()
  })

  test("toggles a todo", () => {
    render(<TodoList />)
    const todo = screen.getByText("Learn React")

    // Initially not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through")

    // Toggle on click
    fireEvent.click(todo)
    expect(todo).toHaveStyle("text-decoration: line-through")
  })

  test("deletes a todo", () => {
    render(<TodoList />)
    const todo = screen.getByText("Learn React")
    const deleteButton = screen.getAllByText("Delete")[0]

    fireEvent.click(deleteButton)

    expect(todo).not.toBeInTheDocument()
  })
})

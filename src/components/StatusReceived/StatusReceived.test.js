import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import StatusReceived from '.'

describe('<StatusReceived />', () => {
	it('should render preparing order status', () => {
		render(<StatusReceived name="Preparando pedido" />)
		const status = screen.getByText('Preparando pedido')
		expect(status)
		expect(status).toHaveClass('bg-sky-300')
	})
	it('should render payment approved status', () => {
		render(<StatusReceived name="Pagamento aprovado" />)
		const status = screen.getByText('Pagamento aprovado')
		expect(status)
		expect(status).toHaveClass('bg-green-300')
	})
	it('should render the status of awaiting payment', () => {
		render(<StatusReceived name="Aguardando pagamento" />)
		const status = screen.getByText('Aguardando pagamento')
		expect(status)
		expect(status).toHaveClass('bg-gray-300')
	})
	it('should render unknown status with gray color', () => {
		render(<StatusReceived name="Status desconhecido" />)
		const status = screen.getByText('Status desconhecido')
		expect(status)
		expect(status).toHaveClass('bg-gray-300')
	})
})

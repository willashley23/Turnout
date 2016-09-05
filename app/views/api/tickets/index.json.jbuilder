@tickets.each do |ticket|
    json.partial! 'api/tickets/ticket', ticket: ticket
end
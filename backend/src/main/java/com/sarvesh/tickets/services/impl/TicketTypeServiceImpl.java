package com.sarvesh.tickets.services.impl;

import com.sarvesh.tickets.domain.entities.Ticket;
import com.sarvesh.tickets.domain.entities.TicketStatusEnum;
import com.sarvesh.tickets.domain.entities.TicketType;
import com.sarvesh.tickets.domain.entities.User;
import com.sarvesh.tickets.exceptions.TicketTypeNotFoundException;
import com.sarvesh.tickets.exceptions.TicketsSoldOutException;
import com.sarvesh.tickets.exceptions.UserNotFoundException;
import com.sarvesh.tickets.repositories.TicketRepository;
import com.sarvesh.tickets.repositories.TicketTypeRepository;
import com.sarvesh.tickets.repositories.UserRepository;
import com.sarvesh.tickets.services.QrCodeService;
import com.sarvesh.tickets.services.TicketTypeService;
import jakarta.transaction.Transactional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TicketTypeServiceImpl implements TicketTypeService {

    private final UserRepository userRepository;
    private final TicketTypeRepository ticketTypeRepository;
    private final TicketRepository ticketRepository;
    private final QrCodeService qrCodeService;

    @Override
    @Transactional
    public Ticket purchaseTicket(UUID userId, UUID ticketTypeId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException(
                String.format("User with ID %s was not found", userId)
        ));

        TicketType ticketType = ticketTypeRepository.findByIdWithLock(ticketTypeId)
                .orElseThrow(() -> new TicketTypeNotFoundException(
                        String.format("Ticket type with ID %s was not found", ticketTypeId)
                ));

        int purchasedTickets = ticketRepository.countByTicketTypeId(ticketType.getId());
        Integer totalAvailable = ticketType.getTotalAvailable();

        if(purchasedTickets + 1 > totalAvailable) {
            throw new TicketsSoldOutException();
        }

        Ticket ticket = new Ticket();
        ticket.setStatus(TicketStatusEnum.PURCHASED);
        ticket.setTicketType(ticketType);
        ticket.setPurchaser(user);

        Ticket savedTicket = ticketRepository.save(ticket);
        qrCodeService.generateQrCode(savedTicket);

        return ticketRepository.save(savedTicket);
    }
}
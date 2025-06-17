package com.sarvesh.tickets.mappers;

import com.sarvesh.tickets.domain.CreateEventRequest;
import com.sarvesh.tickets.domain.CreateTicketTypeRequest;
import com.sarvesh.tickets.domain.UpdateEventRequest;
import com.sarvesh.tickets.domain.UpdateTicketTypeRequest;
import com.sarvesh.tickets.domain.dtos.CreateEventRequestDto;
import com.sarvesh.tickets.domain.dtos.CreateEventResponseDto;
import com.sarvesh.tickets.domain.dtos.CreateTicketTypeRequestDto;
import com.sarvesh.tickets.domain.dtos.GetEventDetailsResponseDto;
import com.sarvesh.tickets.domain.dtos.GetEventDetailsTicketTypesResponseDto;
import com.sarvesh.tickets.domain.dtos.GetPublishedEventDetailsResponseDto;
import com.sarvesh.tickets.domain.dtos.GetPublishedEventDetailsTicketTypesResponseDto;
import com.sarvesh.tickets.domain.dtos.ListEventResponseDto;
import com.sarvesh.tickets.domain.dtos.ListEventTicketTypeResponseDto;
import com.sarvesh.tickets.domain.dtos.ListPublishedEventResponseDto;
import com.sarvesh.tickets.domain.dtos.UpdateEventRequestDto;
import com.sarvesh.tickets.domain.dtos.UpdateEventResponseDto;
import com.sarvesh.tickets.domain.dtos.UpdateTicketTypeRequestDto;
import com.sarvesh.tickets.domain.dtos.UpdateTicketTypeResponseDto;
import com.sarvesh.tickets.domain.entities.Event;
import com.sarvesh.tickets.domain.entities.TicketType;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface EventMapper {

    CreateTicketTypeRequest fromDto(CreateTicketTypeRequestDto dto);

    CreateEventRequest fromDto(CreateEventRequestDto dto);

    CreateEventResponseDto toDto(Event event);

    ListEventTicketTypeResponseDto toDto(TicketType ticketType);

    ListEventResponseDto toListEventResponseDto(Event event);

    GetEventDetailsTicketTypesResponseDto toGetEventDetailsTicketTypesResponseDto(
            TicketType ticketType);

    GetEventDetailsResponseDto toGetEventDetailsResponseDto(Event event);

    UpdateTicketTypeRequest fromDto(UpdateTicketTypeRequestDto dto);

    UpdateEventRequest fromDto(UpdateEventRequestDto dto);

    UpdateTicketTypeResponseDto toUpdateTicketTypeResponseDto(TicketType ticketType);

    UpdateEventResponseDto toUpdateEventResponseDto(Event event);

    ListPublishedEventResponseDto toListPublishedEventResponseDto(Event event);

    GetPublishedEventDetailsTicketTypesResponseDto toGetPublishedEventDetailsTicketTypesResponseDto(
            TicketType ticketType);

    GetPublishedEventDetailsResponseDto toGetPublishedEventDetailsResponseDto(Event event);
}